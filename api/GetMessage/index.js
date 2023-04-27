module.exports = async function (context, req) {
  const date = "2023-04-27T21:07:53.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

