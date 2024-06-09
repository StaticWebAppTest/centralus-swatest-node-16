module.exports = async function (context, req) {
  const date = "2024-06-09T15:09:35.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

