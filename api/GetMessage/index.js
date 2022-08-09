module.exports = async function (context, req) {
  const date = "2022-08-09T21:09:34.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

