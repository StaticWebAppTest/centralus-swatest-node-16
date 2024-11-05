module.exports = async function (context, req) {
  const date = "2024-11-05T07:11:16.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

