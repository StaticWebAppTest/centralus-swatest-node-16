module.exports = async function (context, req) {
  const date = "2022-09-09T20:13:06.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

