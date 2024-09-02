module.exports = async function (context, req) {
  const date = "2024-09-02T17:09:28.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

