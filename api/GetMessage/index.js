module.exports = async function (context, req) {
  const date = "2024-04-18T03:09:44.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

