module.exports = async function (context, req) {
  const date = "2025-05-12T13:27:01.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

