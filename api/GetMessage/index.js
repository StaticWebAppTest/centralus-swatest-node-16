module.exports = async function (context, req) {
  const date = "2022-06-14T22:09:22.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

