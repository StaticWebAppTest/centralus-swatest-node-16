module.exports = async function (context, req) {
  const date = "2024-02-28T01:41:43.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

