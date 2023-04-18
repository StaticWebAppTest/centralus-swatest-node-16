module.exports = async function (context, req) {
  const date = "2023-04-18T00:45:08.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

