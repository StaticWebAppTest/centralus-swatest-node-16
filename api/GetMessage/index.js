module.exports = async function (context, req) {
  const date = "2022-11-04T08:16:10.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

