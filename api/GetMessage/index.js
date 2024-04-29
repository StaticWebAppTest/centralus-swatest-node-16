module.exports = async function (context, req) {
  const date = "2024-04-29T13:10:51.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

