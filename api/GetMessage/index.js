module.exports = async function (context, req) {
  const date = "2023-03-04T16:11:52.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

