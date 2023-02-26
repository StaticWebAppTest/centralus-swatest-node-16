module.exports = async function (context, req) {
  const date = "2023-02-26T23:09:33.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

