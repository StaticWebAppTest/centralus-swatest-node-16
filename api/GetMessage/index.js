module.exports = async function (context, req) {
  const date = "2022-09-26T08:17:22.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

