module.exports = async function (context, req) {
  const date = "2025-02-12T13:18:50.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

