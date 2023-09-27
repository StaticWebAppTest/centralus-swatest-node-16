module.exports = async function (context, req) {
  const date = "2023-09-27T01:43:22.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

