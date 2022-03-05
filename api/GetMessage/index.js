module.exports = async function (context, req) {
  const date = "2022-03-05T15:09:37.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

