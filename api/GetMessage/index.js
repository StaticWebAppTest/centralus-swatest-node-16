module.exports = async function (context, req) {
  const date = "2024-07-19T20:12:39.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

