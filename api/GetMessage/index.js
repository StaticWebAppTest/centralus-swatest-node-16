module.exports = async function (context, req) {
  const date = "2023-05-23T17:07:48.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

