module.exports = async function (context, req) {
  const date = "2024-11-05T11:09:48.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

