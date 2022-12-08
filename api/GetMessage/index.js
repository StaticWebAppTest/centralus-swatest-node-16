module.exports = async function (context, req) {
  const date = "2022-12-08T22:09:34.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

