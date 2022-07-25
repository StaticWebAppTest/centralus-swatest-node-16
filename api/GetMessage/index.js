module.exports = async function (context, req) {
  const date = "2022-07-25T05:22:24.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

