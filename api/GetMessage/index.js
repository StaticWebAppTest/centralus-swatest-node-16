module.exports = async function (context, req) {
  const date = "2024-08-20T08:14:42.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

