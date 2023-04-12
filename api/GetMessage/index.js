module.exports = async function (context, req) {
  const date = "2023-04-12T05:08:48.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

