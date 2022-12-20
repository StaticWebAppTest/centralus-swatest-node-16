module.exports = async function (context, req) {
  const date = "2022-12-20T05:09:16.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

