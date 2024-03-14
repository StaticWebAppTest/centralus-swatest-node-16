module.exports = async function (context, req) {
  const date = "2024-03-14T20:10:00.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

