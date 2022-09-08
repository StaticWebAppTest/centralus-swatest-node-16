module.exports = async function (context, req) {
  const date = "2022-09-08T05:57:02.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

