module.exports = async function (context, req) {
  const date = "2023-08-28T02:15:06.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

