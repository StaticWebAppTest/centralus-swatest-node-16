module.exports = async function (context, req) {
  const date = "2023-12-31T09:08:22.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

