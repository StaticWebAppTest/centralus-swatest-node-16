module.exports = async function (context, req) {
  const date = "2024-03-16T20:08:56.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

