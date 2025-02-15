module.exports = async function (context, req) {
  const date = "2025-02-15T09:11:30.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

