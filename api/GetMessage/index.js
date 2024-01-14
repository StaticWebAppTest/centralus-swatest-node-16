module.exports = async function (context, req) {
  const date = "2024-01-14T00:49:21.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

