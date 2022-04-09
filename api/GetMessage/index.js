module.exports = async function (context, req) {
  const date = "2022-04-09T23:09:48.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

