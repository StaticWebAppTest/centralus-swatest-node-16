module.exports = async function (context, req) {
  const date = "2024-03-21T17:08:31.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

