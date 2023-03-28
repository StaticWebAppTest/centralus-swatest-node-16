module.exports = async function (context, req) {
  const date = "2023-03-28T18:11:41.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

