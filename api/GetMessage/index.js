module.exports = async function (context, req) {
  const date = "2022-12-14T04:12:10.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

