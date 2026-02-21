import Array "mo:core/Array";
import Time "mo:core/Time";
import List "mo:core/List";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    projectType : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let submissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, phone : Text, projectType : Text, message : Text) : async Bool {
    let submission : ContactSubmission = {
      name;
      email;
      phone;
      projectType;
      message;
      timestamp = Time.now();
    };

    submissions.add(submission);
    true;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.toArray();
  };

  public query ({ caller }) func getSubmissionsByProjectType(projectType : Text) : async [ContactSubmission] {
    submissions.toArray().filter(func(sub) { sub.projectType == projectType });
  };

  public query ({ caller }) func getSubmissionsByEmail(email : Text) : async [ContactSubmission] {
    submissions.toArray().filter(func(sub) { sub.email == email });
  };
};
