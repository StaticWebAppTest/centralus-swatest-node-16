module.exports = async function (context, req) {
  const date = "2023-04-15T23:08:02.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

