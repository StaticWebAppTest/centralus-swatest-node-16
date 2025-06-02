module.exports = async function (context, req) {
  const date = "2025-06-02T09:15:40.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

