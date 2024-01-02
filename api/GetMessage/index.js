module.exports = async function (context, req) {
  const date = "2024-01-02T04:11:23.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

