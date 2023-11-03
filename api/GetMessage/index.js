module.exports = async function (context, req) {
  const date = "2023-11-03T15:09:28.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

