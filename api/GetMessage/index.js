module.exports = async function (context, req) {
  const date = "2024-07-18T16:12:28.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

