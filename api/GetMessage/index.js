module.exports = async function (context, req) {
  const date = "2023-01-31T20:10:34.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

