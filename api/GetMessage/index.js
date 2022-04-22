module.exports = async function (context, req) {
  const date = "2022-04-22T14:10:34.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

