module.exports = async function (context, req) {
  const date = "2025-03-23T11:10:11.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

