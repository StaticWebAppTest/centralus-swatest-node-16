module.exports = async function (context, req) {
  const date = "2023-02-23T08:12:58.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

