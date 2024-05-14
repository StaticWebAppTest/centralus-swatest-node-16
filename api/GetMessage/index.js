module.exports = async function (context, req) {
  const date = "2024-05-14T08:13:52.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

