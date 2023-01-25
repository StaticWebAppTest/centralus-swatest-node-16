module.exports = async function (context, req) {
  const date = "2023-01-25T15:09:49.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

