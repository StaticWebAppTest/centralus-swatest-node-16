module.exports = async function (context, req) {
  const date = "2023-07-15T20:09:22.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

