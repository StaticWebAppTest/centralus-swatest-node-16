module.exports = async function (context, req) {
  const date = "2023-07-30T21:06:56.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

