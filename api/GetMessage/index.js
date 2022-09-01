module.exports = async function (context, req) {
  const date = "2022-09-01T16:15:36.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

