module.exports = async function (context, req) {
  const date = "2024-03-29T03:09:43.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

