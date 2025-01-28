module.exports = async function (context, req) {
  const date = "2025-01-28T17:10:00.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

