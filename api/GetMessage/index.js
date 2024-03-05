module.exports = async function (context, req) {
  const date = "2024-03-05T20:09:18.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

