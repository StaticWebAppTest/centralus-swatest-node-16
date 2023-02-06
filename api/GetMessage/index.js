module.exports = async function (context, req) {
  const date = "2023-02-06T08:13:06.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

