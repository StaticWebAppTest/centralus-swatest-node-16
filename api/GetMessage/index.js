module.exports = async function (context, req) {
  const date = "2024-09-25T17:10:28.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

