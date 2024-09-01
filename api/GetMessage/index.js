module.exports = async function (context, req) {
  const date = "2024-09-01T12:19:09.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

