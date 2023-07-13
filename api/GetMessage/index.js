module.exports = async function (context, req) {
  const date = "2023-07-13T22:09:28.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

