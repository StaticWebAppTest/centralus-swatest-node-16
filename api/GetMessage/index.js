module.exports = async function (context, req) {
  const date = "2024-05-21T17:08:58.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

