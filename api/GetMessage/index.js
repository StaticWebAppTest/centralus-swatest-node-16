module.exports = async function (context, req) {
  const date = "2024-01-23T17:08:52.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

