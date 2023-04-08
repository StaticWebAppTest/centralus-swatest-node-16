module.exports = async function (context, req) {
  const date = "2023-04-08T23:07:59.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

