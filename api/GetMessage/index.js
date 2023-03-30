module.exports = async function (context, req) {
  const date = "2023-03-30T00:50:55.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

