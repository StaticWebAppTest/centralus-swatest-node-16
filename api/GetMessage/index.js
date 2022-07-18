module.exports = async function (context, req) {
  const date = "2022-07-18T04:41:00.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

