module.exports = async function (context, req) {
  const date = "2023-12-17T05:08:40.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

