module.exports = async function (context, req) {
  const date = "2023-12-14T02:22:06.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

