module.exports = async function (context, req) {
  const date = "2022-07-17T05:13:13.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

