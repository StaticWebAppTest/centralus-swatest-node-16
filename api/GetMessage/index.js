module.exports = async function (context, req) {
  const date = "2025-12-07T15:12:07.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

