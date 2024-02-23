module.exports = async function (context, req) {
  const date = "2024-02-23T20:10:52.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

