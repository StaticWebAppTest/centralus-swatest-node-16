module.exports = async function (context, req) {
  const date = "2023-05-14T22:07:35.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

