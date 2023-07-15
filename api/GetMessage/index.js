module.exports = async function (context, req) {
  const date = "2023-07-15T08:11:55.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

