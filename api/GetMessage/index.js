module.exports = async function (context, req) {
  const date = "2024-12-05T01:02:27.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

