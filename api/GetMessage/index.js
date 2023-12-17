module.exports = async function (context, req) {
  const date = "2023-12-17T07:08:21.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

