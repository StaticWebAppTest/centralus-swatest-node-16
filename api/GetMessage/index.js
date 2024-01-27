module.exports = async function (context, req) {
  const date = "2024-01-27T21:07:14.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

