module.exports = async function (context, req) {
  const date = "2025-08-23T10:12:33.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

