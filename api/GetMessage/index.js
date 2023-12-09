module.exports = async function (context, req) {
  const date = "2023-12-09T00:42:37.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

