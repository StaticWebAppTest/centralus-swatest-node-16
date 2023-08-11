module.exports = async function (context, req) {
  const date = "2023-08-11T05:08:15.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

