module.exports = async function (context, req) {
  const date = "2024-01-21T06:12:09.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

