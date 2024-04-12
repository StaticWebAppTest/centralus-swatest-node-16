module.exports = async function (context, req) {
  const date = "2024-04-12T13:09:09.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

