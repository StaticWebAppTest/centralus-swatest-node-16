module.exports = async function (context, req) {
  const date = "2023-10-15T20:08:31.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

