module.exports = async function (context, req) {
  const date = "2025-05-01T10:13:40.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

