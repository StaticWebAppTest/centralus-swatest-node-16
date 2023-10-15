module.exports = async function (context, req) {
  const date = "2023-10-15T16:09:58.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

