module.exports = async function (context, req) {
  const date = "2024-06-18T12:19:02.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

