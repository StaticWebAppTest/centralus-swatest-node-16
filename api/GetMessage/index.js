module.exports = async function (context, req) {
  const date = "2024-01-20T19:07:01.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

