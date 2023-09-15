module.exports = async function (context, req) {
  const date = "2023-09-15T08:11:22.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

