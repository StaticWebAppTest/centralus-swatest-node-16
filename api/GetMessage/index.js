module.exports = async function (context, req) {
  const date = "2023-02-02T16:12:53.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

