module.exports = async function (context, req) {
  const date = "2022-06-04T20:10:24.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

