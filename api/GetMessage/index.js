module.exports = async function (context, req) {
  const date = "2023-01-01T08:11:52.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

