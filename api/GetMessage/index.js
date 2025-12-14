module.exports = async function (context, req) {
  const date = "2025-12-14T15:13:09.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

