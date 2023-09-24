module.exports = async function (context, req) {
  const date = "2023-09-24T01:46:38.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

