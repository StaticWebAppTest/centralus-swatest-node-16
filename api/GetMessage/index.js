module.exports = async function (context, req) {
  const date = "2023-12-19T08:12:22.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

