module.exports = async function (context, req) {
  const date = "2024-06-06T10:10:54.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

