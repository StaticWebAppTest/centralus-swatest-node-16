module.exports = async function (context, req) {
  const date = "2022-04-22T16:15:34.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

