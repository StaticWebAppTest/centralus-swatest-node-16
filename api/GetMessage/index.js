module.exports = async function (context, req) {
  const date = "2023-11-06T00:42:38.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

