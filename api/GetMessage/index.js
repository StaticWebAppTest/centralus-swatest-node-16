module.exports = async function (context, req) {
  const date = "2023-04-24T16:11:34.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

