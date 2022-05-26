module.exports = async function (context, req) {
  const date = "2022-05-26T13:30:43.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

