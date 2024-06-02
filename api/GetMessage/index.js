module.exports = async function (context, req) {
  const date = "2024-06-02T18:13:21.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

