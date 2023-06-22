module.exports = async function (context, req) {
  const date = "2023-06-22T18:10:49.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

