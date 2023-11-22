module.exports = async function (context, req) {
  const date = "2023-11-22T23:09:06.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

