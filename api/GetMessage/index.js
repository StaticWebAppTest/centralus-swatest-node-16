module.exports = async function (context, req) {
  const date = "2024-02-26T11:06:47.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

