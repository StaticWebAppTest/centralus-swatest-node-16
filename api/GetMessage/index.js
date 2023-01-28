module.exports = async function (context, req) {
  const date = "2023-01-28T10:09:41.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

