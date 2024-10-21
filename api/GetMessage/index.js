module.exports = async function (context, req) {
  const date = "2024-10-21T05:12:19.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

