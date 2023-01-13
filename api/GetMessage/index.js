module.exports = async function (context, req) {
  const date = "2023-01-13T15:10:44.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

