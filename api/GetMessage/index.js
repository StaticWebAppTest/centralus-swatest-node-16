module.exports = async function (context, req) {
  const date = "2023-03-01T23:10:22.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

