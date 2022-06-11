module.exports = async function (context, req) {
  const date = "2022-06-11T22:09:18.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

