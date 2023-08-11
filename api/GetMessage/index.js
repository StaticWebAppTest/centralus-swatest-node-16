module.exports = async function (context, req) {
  const date = "2023-08-11T23:07:41.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

