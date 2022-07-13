module.exports = async function (context, req) {
  const date = "2022-07-13T21:10:34.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

