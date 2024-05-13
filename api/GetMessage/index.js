module.exports = async function (context, req) {
  const date = "2024-05-13T17:08:22.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

