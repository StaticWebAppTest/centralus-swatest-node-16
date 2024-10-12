module.exports = async function (context, req) {
  const date = "2024-10-12T16:13:34.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

