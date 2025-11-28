module.exports = async function (context, req) {
  const date = "2025-11-28T17:12:00.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

