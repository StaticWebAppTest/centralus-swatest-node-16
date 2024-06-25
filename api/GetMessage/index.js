module.exports = async function (context, req) {
  const date = "2024-06-25T20:10:36.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

