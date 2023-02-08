module.exports = async function (context, req) {
  const date = "2023-02-08T04:12:19.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

