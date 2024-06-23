module.exports = async function (context, req) {
  const date = "2024-06-23T12:17:44.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

