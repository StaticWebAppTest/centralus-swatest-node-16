module.exports = async function (context, req) {
  const date = "2024-01-11T15:09:57.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

