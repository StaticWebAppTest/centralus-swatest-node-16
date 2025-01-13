module.exports = async function (context, req) {
  const date = "2025-01-13T01:00:40.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

