module.exports = async function (context, req) {
  const date = "2023-01-14T09:08:38.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

