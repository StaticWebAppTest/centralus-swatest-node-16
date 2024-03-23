module.exports = async function (context, req) {
  const date = "2024-03-23T13:08:26.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

