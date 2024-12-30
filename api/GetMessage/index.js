module.exports = async function (context, req) {
  const date = "2024-12-30T18:15:47.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

