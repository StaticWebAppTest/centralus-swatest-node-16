module.exports = async function (context, req) {
  const date = "2023-01-02T16:12:23.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

