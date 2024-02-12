module.exports = async function (context, req) {
  const date = "2024-02-12T01:41:20.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

