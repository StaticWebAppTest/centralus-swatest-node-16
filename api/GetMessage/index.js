module.exports = async function (context, req) {
  const date = "2024-07-06T18:12:22.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

