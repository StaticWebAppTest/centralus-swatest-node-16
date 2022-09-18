module.exports = async function (context, req) {
  const date = "2022-09-18T13:30:17.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

