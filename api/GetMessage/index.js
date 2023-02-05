module.exports = async function (context, req) {
  const date = "2023-02-05T07:08:12.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

