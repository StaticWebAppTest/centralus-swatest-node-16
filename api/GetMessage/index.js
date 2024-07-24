module.exports = async function (context, req) {
  const date = "2024-07-24T15:11:34.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

