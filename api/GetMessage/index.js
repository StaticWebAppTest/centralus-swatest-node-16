module.exports = async function (context, req) {
  const date = "2023-08-19T19:05:49.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

