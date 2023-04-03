module.exports = async function (context, req) {
  const date = "2023-04-03T16:11:42.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

