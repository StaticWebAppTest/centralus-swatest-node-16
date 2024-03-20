module.exports = async function (context, req) {
  const date = "2024-03-20T18:11:19.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

