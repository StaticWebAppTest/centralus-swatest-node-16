module.exports = async function (context, req) {
  const date = "2023-03-14T05:09:27.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

