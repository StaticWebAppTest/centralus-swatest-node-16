module.exports = async function (context, req) {
  const date = "2023-02-01T11:08:14.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

