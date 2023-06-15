module.exports = async function (context, req) {
  const date = "2023-06-15T06:11:44.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

