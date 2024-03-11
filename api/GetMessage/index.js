module.exports = async function (context, req) {
  const date = "2024-03-11T00:42:13.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

