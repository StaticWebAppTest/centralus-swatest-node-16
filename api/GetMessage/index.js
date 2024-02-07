module.exports = async function (context, req) {
  const date = "2024-02-07T10:10:18.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

