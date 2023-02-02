module.exports = async function (context, req) {
  const date = "2023-02-02T08:12:51.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

