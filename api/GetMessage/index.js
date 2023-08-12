module.exports = async function (context, req) {
  const date = "2023-08-12T20:07:47.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

