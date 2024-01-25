module.exports = async function (context, req) {
  const date = "2024-01-25T20:09:44.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

