module.exports = async function (context, req) {
  const date = "2024-02-21T10:10:19.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

