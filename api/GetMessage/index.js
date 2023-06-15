module.exports = async function (context, req) {
  const date = "2023-06-15T18:10:39.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

