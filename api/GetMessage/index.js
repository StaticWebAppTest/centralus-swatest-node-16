module.exports = async function (context, req) {
  const date = "2024-11-15T21:10:47.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

