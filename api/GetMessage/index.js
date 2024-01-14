module.exports = async function (context, req) {
  const date = "2024-01-14T21:08:15.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

