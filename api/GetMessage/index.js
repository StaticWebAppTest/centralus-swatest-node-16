module.exports = async function (context, req) {
  const date = "2024-04-30T14:09:04.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

