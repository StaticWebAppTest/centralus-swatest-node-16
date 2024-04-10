module.exports = async function (context, req) {
  const date = "2024-04-10T12:16:42.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

