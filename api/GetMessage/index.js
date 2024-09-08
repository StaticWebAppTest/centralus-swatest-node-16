module.exports = async function (context, req) {
  const date = "2024-09-08T00:58:00.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

