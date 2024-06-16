module.exports = async function (context, req) {
  const date = "2024-06-16T15:10:21.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

