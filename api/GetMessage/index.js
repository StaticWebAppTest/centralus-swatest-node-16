module.exports = async function (context, req) {
  const date = "2024-02-29T08:11:12.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

