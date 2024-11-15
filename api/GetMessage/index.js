module.exports = async function (context, req) {
  const date = "2024-11-15T06:20:43.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

