module.exports = async function (context, req) {
  const date = "2022-12-18T04:10:51.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

