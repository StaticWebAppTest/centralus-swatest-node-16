module.exports = async function (context, req) {
  const date = "2023-04-17T06:12:28.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

