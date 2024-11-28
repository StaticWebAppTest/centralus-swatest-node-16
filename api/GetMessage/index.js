module.exports = async function (context, req) {
  const date = "2024-11-28T18:16:28.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

