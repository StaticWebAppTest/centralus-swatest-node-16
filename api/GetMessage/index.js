module.exports = async function (context, req) {
  const date = "2025-07-27T10:14:19.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

