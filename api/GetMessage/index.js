module.exports = async function (context, req) {
  const date = "2022-09-13T12:26:40.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

