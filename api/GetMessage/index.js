module.exports = async function (context, req) {
  const date = "2024-07-15T17:09:32.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

