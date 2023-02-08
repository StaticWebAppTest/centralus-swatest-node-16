module.exports = async function (context, req) {
  const date = "2023-02-08T18:12:31.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

