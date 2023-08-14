module.exports = async function (context, req) {
  const date = "2023-08-14T22:07:46.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

