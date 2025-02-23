module.exports = async function (context, req) {
  const date = "2025-02-23T10:12:12.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

