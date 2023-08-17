module.exports = async function (context, req) {
  const date = "2023-08-17T11:06:44.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

