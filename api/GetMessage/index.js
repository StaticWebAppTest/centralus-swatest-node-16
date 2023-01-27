module.exports = async function (context, req) {
  const date = "2023-01-27T23:09:01.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

