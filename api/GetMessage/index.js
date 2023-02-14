module.exports = async function (context, req) {
  const date = "2023-02-14T16:13:27.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

