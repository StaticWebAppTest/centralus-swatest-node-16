module.exports = async function (context, req) {
  const date = "2024-02-05T16:10:48.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

