module.exports = async function (context, req) {
  const date = "2024-08-01T15:11:02.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

