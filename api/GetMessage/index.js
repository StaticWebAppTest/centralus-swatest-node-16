module.exports = async function (context, req) {
  const date = "2024-02-27T10:10:45.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

