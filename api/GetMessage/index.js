module.exports = async function (context, req) {
  const date = "2022-06-06T15:10:59.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

