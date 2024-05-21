module.exports = async function (context, req) {
  const date = "2024-05-21T15:10:05.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

