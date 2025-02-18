module.exports = async function (context, req) {
  const date = "2025-02-18T15:13:00.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

