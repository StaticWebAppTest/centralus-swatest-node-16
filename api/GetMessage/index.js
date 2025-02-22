module.exports = async function (context, req) {
  const date = "2025-02-22T07:10:07.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

