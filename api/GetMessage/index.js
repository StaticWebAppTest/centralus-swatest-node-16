module.exports = async function (context, req) {
  const date = "2025-07-18T11:12:27.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

