module.exports = async function (context, req) {
  const date = "2023-05-18T15:08:35.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

