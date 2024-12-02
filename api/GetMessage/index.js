module.exports = async function (context, req) {
  const date = "2024-12-02T01:03:17.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

