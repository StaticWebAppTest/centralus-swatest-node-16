module.exports = async function (context, req) {
  const date = "2024-03-12T17:08:44.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

