module.exports = async function (context, req) {
  const date = "2024-10-23T00:56:29.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

