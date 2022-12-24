module.exports = async function (context, req) {
  const date = "2022-12-24T14:07:34.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

