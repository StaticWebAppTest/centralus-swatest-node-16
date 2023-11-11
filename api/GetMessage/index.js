module.exports = async function (context, req) {
  const date = "2023-11-11T02:47:44.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

