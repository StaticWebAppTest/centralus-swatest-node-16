module.exports = async function (context, req) {
  const date = "2023-10-14T03:08:49.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

