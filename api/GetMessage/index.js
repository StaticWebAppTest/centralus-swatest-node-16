module.exports = async function (context, req) {
  const date = "2022-03-17T00:44:28.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

