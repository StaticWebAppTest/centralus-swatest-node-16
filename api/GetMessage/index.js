module.exports = async function (context, req) {
  const date = "2023-10-03T00:41:32.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

