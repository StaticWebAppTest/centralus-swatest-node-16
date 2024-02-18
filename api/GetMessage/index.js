module.exports = async function (context, req) {
  const date = "2024-02-18T10:09:11.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

