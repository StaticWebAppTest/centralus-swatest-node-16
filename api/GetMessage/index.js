module.exports = async function (context, req) {
  const date = "2023-06-01T15:08:40.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

