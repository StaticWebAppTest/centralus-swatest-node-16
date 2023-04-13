module.exports = async function (context, req) {
  const date = "2023-04-13T14:08:31.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

