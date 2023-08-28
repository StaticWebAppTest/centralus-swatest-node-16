module.exports = async function (context, req) {
  const date = "2023-08-28T11:07:00.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

