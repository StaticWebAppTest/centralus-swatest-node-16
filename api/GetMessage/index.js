module.exports = async function (context, req) {
  const date = "2023-12-17T01:55:27.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

