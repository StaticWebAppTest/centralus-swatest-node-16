module.exports = async function (context, req) {
  const date = "2023-07-09T04:11:33.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

