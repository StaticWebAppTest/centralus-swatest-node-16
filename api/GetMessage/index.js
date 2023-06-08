module.exports = async function (context, req) {
  const date = "2023-06-08T11:07:44.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

