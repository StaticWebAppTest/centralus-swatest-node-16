module.exports = async function (context, req) {
  const date = "2023-01-23T21:08:30.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

