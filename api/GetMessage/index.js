module.exports = async function (context, req) {
  const date = "2023-03-24T17:08:46.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

