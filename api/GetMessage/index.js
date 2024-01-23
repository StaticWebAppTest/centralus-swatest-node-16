module.exports = async function (context, req) {
  const date = "2024-01-23T21:08:36.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

