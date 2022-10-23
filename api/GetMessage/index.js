module.exports = async function (context, req) {
  const date = "2022-10-23T05:38:34.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

