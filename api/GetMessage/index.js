module.exports = async function (context, req) {
  const date = "2025-02-01T18:13:45.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

