module.exports = async function (context, req) {
  const date = "2024-04-17T14:08:55.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

