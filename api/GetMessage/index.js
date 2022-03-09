module.exports = async function (context, req) {
  const date = "2022-03-09T04:12:36.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

