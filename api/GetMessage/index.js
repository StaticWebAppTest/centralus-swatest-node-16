module.exports = async function (context, req) {
  const date = "2023-02-11T00:46:22.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

