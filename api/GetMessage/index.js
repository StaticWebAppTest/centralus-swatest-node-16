module.exports = async function (context, req) {
  const date = "2022-03-17T12:18:04.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

