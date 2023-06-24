module.exports = async function (context, req) {
  const date = "2023-06-24T16:12:00.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

