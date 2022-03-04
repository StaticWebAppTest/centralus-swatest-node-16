module.exports = async function (context, req) {
  const date = "2022-03-04T23:09:50.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

