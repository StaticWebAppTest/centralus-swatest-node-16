module.exports = async function (context, req) {
  const date = "2024-03-17T07:07:37.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

