module.exports = async function (context, req) {
  const date = "2024-12-31T08:15:20.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

