module.exports = async function (context, req) {
  const date = "2023-11-11T01:42:46.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

