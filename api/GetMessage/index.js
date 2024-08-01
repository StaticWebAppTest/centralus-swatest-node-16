module.exports = async function (context, req) {
  const date = "2024-08-01T17:10:45.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

