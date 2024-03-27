module.exports = async function (context, req) {
  const date = "2024-03-27T09:10:26.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

