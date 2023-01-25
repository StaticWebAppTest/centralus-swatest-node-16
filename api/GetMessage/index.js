module.exports = async function (context, req) {
  const date = "2023-01-25T21:07:06.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

