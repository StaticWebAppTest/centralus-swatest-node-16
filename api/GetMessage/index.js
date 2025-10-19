module.exports = async function (context, req) {
  const date = "2025-10-19T05:12:32.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

