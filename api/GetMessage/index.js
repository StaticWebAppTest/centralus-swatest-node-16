module.exports = async function (context, req) {
  const date = "2024-04-17T08:12:05.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

