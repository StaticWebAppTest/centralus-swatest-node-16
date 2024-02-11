module.exports = async function (context, req) {
  const date = "2024-02-11T12:14:22.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

