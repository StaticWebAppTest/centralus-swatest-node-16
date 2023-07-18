module.exports = async function (context, req) {
  const date = "2023-07-18T18:12:09.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

