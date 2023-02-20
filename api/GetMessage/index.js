module.exports = async function (context, req) {
  const date = "2023-02-20T18:12:18.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

