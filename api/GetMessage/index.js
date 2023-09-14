module.exports = async function (context, req) {
  const date = "2023-09-14T05:08:13.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

