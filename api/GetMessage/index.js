module.exports = async function (context, req) {
  const date = "2022-09-26T19:13:21.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

