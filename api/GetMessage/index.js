module.exports = async function (context, req) {
  const date = "2023-06-18T17:07:10.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

