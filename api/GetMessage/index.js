module.exports = async function (context, req) {
  const date = "2023-12-29T18:10:58.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

