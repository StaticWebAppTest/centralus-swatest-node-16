module.exports = async function (context, req) {
  const date = "2023-10-10T07:08:22.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

