module.exports = async function (context, req) {
  const date = "2024-03-14T01:41:01.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

