module.exports = async function (context, req) {
  const date = "2025-05-06T23:12:05.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

