module.exports = async function (context, req) {
  const date = "2024-05-15T17:10:05.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

