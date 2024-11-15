module.exports = async function (context, req) {
  const date = "2024-11-15T17:10:55.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

