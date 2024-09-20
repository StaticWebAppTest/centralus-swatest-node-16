module.exports = async function (context, req) {
  const date = "2024-09-20T15:11:41.986Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

