module.exports = async function (context, req) {
  const date = "2023-06-12T22:08:11.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

