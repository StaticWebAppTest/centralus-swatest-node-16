module.exports = async function (context, req) {
  const date = "2024-12-15T17:10:05.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

