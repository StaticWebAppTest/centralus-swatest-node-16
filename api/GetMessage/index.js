module.exports = async function (context, req) {
  const date = "2022-12-27T03:10:27.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

