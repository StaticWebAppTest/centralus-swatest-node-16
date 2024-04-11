module.exports = async function (context, req) {
  const date = "2024-04-11T16:10:13.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

