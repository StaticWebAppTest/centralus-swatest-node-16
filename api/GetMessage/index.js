module.exports = async function (context, req) {
  const date = "2024-11-24T12:21:07.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

