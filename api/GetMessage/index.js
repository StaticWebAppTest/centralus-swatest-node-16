module.exports = async function (context, req) {
  const date = "2025-03-28T17:11:46.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

