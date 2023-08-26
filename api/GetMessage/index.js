module.exports = async function (context, req) {
  const date = "2023-08-26T21:06:36.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

