module.exports = async function (context, req) {
  const date = "2022-03-16T00:43:31.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

