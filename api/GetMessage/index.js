module.exports = async function (context, req) {
  const date = "2022-04-24T20:11:44.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

