module.exports = async function (context, req) {
  const date = "2022-03-04T19:08:00.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

