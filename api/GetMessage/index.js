module.exports = async function (context, req) {
  const date = "2023-12-25T01:51:17.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

