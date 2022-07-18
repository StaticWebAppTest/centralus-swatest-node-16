module.exports = async function (context, req) {
  const date = "2022-07-18T05:24:51.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

