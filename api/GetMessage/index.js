module.exports = async function (context, req) {
  const date = "2023-09-28T01:42:42.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

