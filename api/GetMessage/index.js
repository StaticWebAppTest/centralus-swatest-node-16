module.exports = async function (context, req) {
  const date = "2023-08-01T19:06:51.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

