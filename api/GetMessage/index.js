module.exports = async function (context, req) {
  const date = "2024-06-26T11:09:14.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

