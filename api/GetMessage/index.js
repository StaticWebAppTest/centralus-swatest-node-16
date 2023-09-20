module.exports = async function (context, req) {
  const date = "2023-09-20T00:40:22.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

