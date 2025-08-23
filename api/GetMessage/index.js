module.exports = async function (context, req) {
  const date = "2025-08-23T16:13:49.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

