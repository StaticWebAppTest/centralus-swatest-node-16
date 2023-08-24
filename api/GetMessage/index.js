module.exports = async function (context, req) {
  const date = "2023-08-24T22:07:37.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

