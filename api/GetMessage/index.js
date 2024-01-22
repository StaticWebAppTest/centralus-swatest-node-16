module.exports = async function (context, req) {
  const date = "2024-01-22T07:09:35.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

