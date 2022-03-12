module.exports = async function (context, req) {
  const date = "2022-03-12T06:12:35.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

