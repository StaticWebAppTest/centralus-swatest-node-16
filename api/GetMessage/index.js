module.exports = async function (context, req) {
  const date = "2023-12-27T07:08:38.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

