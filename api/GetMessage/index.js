module.exports = async function (context, req) {
  const date = "2024-10-22T10:12:36.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

