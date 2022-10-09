module.exports = async function (context, req) {
  const date = "2022-10-09T13:34:24.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

