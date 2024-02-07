module.exports = async function (context, req) {
  const date = "2024-02-07T08:11:05.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

