module.exports = async function (context, req) {
  const date = "2022-04-09T16:13:15.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

