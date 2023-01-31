module.exports = async function (context, req) {
  const date = "2023-01-31T07:09:00.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

