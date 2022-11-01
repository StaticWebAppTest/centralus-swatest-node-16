module.exports = async function (context, req) {
  const date = "2022-11-01T17:22:05.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

