module.exports = async function (context, req) {
  const date = "2023-02-14T04:12:22.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

