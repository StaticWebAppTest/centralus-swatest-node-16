module.exports = async function (context, req) {
  const date = "2023-02-19T12:17:13.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

