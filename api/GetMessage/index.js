module.exports = async function (context, req) {
  const date = "2024-01-23T20:10:16.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

