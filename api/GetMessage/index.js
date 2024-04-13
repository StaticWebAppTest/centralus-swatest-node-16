module.exports = async function (context, req) {
  const date = "2024-04-13T01:29:02.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

