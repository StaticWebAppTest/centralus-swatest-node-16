module.exports = async function (context, req) {
  const date = "2024-12-27T00:56:52.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

