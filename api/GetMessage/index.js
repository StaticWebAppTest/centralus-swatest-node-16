module.exports = async function (context, req) {
  const date = "2024-02-17T19:07:21.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

