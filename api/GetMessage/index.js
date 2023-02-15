module.exports = async function (context, req) {
  const date = "2023-02-15T06:13:20.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

