module.exports = async function (context, req) {
  const date = "2023-04-27T16:09:49.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

