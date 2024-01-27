module.exports = async function (context, req) {
  const date = "2024-01-27T04:10:07.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

