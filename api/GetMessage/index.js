module.exports = async function (context, req) {
  const date = "2023-04-10T01:57:06.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

