module.exports = async function (context, req) {
  const date = "2023-06-30T22:08:59.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

