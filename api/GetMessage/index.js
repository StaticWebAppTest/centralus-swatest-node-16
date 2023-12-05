module.exports = async function (context, req) {
  const date = "2023-12-05T00:44:06.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

