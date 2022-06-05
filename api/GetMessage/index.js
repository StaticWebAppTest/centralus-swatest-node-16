module.exports = async function (context, req) {
  const date = "2022-06-05T04:12:04.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

