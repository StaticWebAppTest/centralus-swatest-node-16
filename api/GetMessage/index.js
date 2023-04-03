module.exports = async function (context, req) {
  const date = "2023-04-03T09:09:32.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

