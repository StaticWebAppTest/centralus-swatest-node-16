module.exports = async function (context, req) {
  const date = "2023-06-04T19:06:23.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

