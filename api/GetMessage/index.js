module.exports = async function (context, req) {
  const date = "2023-07-27T14:07:59.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

