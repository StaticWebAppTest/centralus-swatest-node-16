module.exports = async function (context, req) {
  const date = "2025-01-24T07:11:02.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

