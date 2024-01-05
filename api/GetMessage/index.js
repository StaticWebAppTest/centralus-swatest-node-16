module.exports = async function (context, req) {
  const date = "2024-01-05T08:12:10.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

