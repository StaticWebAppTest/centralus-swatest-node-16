module.exports = async function (context, req) {
  const date = "2023-08-11T01:38:55.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

