module.exports = async function (context, req) {
  const date = "2023-01-19T09:09:51.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

