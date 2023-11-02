module.exports = async function (context, req) {
  const date = "2023-11-02T23:08:56.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

