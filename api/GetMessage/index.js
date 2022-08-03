module.exports = async function (context, req) {
  const date = "2022-08-03T12:22:25.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

