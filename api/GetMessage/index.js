module.exports = async function (context, req) {
  const date = "2023-11-12T22:07:51.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

