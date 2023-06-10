module.exports = async function (context, req) {
  const date = "2023-06-10T11:06:44.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

