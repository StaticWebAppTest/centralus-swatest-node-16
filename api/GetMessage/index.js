module.exports = async function (context, req) {
  const date = "2023-12-09T21:07:26.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

