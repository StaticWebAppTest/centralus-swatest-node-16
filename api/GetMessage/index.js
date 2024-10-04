module.exports = async function (context, req) {
  const date = "2024-10-04T10:12:58.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

