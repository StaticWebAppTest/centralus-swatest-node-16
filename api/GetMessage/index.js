module.exports = async function (context, req) {
  const date = "2023-12-25T13:10:28.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

