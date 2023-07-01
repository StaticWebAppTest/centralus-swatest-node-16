module.exports = async function (context, req) {
  const date = "2023-07-01T16:11:22.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

