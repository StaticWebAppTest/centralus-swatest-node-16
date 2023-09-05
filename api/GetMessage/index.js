module.exports = async function (context, req) {
  const date = "2023-09-05T14:08:08.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

