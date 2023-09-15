module.exports = async function (context, req) {
  const date = "2023-09-15T01:43:08.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

