module.exports = async function (context, req) {
  const date = "2023-02-14T09:10:39.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

