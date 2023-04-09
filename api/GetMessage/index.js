module.exports = async function (context, req) {
  const date = "2023-04-09T00:48:20.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

