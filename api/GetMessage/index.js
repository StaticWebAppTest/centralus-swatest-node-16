module.exports = async function (context, req) {
  const date = "2023-01-19T14:09:46.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

