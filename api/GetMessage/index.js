module.exports = async function (context, req) {
  const date = "2024-04-24T21:08:19.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

