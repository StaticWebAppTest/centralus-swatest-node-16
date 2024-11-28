module.exports = async function (context, req) {
  const date = "2024-11-28T13:22:50.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

