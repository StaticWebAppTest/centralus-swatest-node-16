module.exports = async function (context, req) {
  const date = "2022-09-26T23:13:47.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

