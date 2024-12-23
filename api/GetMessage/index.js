module.exports = async function (context, req) {
  const date = "2024-12-23T00:58:24.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

