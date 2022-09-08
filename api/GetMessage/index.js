module.exports = async function (context, req) {
  const date = "2022-09-08T13:30:50.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

