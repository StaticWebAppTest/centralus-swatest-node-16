module.exports = async function (context, req) {
  const date = "2024-08-23T21:09:59.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

