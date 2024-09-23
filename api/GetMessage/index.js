module.exports = async function (context, req) {
  const date = "2024-09-23T10:13:44.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

