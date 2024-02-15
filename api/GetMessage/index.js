module.exports = async function (context, req) {
  const date = "2024-02-15T08:11:31.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

