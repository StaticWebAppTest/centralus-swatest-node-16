module.exports = async function (context, req) {
  const date = "2023-01-31T23:09:51.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

