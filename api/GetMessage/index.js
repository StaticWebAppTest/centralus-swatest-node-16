module.exports = async function (context, req) {
  const date = "2023-06-25T13:17:12.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

