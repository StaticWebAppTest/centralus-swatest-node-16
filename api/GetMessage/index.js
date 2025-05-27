module.exports = async function (context, req) {
  const date = "2025-05-27T07:13:34.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

