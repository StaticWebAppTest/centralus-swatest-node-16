module.exports = async function (context, req) {
  const date = "2023-01-26T07:09:04.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

