module.exports = async function (context, req) {
  const date = "2024-06-18T18:13:57.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

