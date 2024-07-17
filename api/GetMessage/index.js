module.exports = async function (context, req) {
  const date = "2024-07-17T12:19:45.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

