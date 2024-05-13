module.exports = async function (context, req) {
  const date = "2024-05-13T23:09:27.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

