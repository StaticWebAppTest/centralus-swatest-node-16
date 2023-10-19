module.exports = async function (context, req) {
  const date = "2023-10-19T03:09:27.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

