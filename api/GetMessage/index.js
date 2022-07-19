module.exports = async function (context, req) {
  const date = "2022-07-19T12:22:12.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

