module.exports = async function (context, req) {
  const date = "2023-09-04T06:11:55.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

