module.exports = async function (context, req) {
  const date = "2024-02-03T14:07:12.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

