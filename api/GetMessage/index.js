module.exports = async function (context, req) {
  const date = "2024-03-08T18:11:40.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

