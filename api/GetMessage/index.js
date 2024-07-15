module.exports = async function (context, req) {
  const date = "2024-07-15T13:14:33.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

