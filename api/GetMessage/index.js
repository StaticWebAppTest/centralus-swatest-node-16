module.exports = async function (context, req) {
  const date = "2023-07-17T18:12:33.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

