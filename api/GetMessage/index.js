module.exports = async function (context, req) {
  const date = "2022-04-18T19:08:27.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

