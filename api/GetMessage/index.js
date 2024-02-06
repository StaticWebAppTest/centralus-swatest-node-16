module.exports = async function (context, req) {
  const date = "2024-02-06T02:15:09.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

