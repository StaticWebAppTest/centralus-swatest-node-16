module.exports = async function (context, req) {
  const date = "2024-03-27T01:42:00.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

