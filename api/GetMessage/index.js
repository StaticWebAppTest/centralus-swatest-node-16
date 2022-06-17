module.exports = async function (context, req) {
  const date = "2022-06-17T05:13:16.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

