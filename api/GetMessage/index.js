module.exports = async function (context, req) {
  const date = "2023-10-27T22:08:22.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

