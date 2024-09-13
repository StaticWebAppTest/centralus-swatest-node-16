module.exports = async function (context, req) {
  const date = "2024-09-13T00:54:06.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

