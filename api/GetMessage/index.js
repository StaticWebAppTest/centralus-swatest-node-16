module.exports = async function (context, req) {
  const date = "2024-05-27T05:10:16.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

