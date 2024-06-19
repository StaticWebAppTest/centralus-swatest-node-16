module.exports = async function (context, req) {
  const date = "2024-06-19T16:12:37.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

