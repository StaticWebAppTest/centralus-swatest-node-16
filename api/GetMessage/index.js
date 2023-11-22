module.exports = async function (context, req) {
  const date = "2023-11-22T15:10:06.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

