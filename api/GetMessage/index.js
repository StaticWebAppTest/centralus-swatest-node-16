module.exports = async function (context, req) {
  const date = "2024-01-08T21:07:44.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

