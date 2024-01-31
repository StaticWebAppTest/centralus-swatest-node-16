module.exports = async function (context, req) {
  const date = "2024-01-31T05:09:27.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

