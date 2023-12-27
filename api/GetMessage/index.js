module.exports = async function (context, req) {
  const date = "2023-12-27T06:12:19.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

