module.exports = async function (context, req) {
  const date = "2024-04-29T15:09:54.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

