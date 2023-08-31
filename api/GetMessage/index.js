module.exports = async function (context, req) {
  const date = "2023-08-31T17:07:54.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

