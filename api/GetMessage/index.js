module.exports = async function (context, req) {
  const date = "2022-10-07T11:14:38.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

