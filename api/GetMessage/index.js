module.exports = async function (context, req) {
  const date = "2024-10-16T18:15:51.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

