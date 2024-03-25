module.exports = async function (context, req) {
  const date = "2024-03-25T20:09:48.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

