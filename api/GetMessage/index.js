module.exports = async function (context, req) {
  const date = "2023-06-10T00:51:44.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

