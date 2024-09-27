module.exports = async function (context, req) {
  const date = "2024-09-27T06:17:38.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

