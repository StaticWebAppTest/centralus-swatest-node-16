module.exports = async function (context, req) {
  const date = "2024-06-14T20:10:43.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

