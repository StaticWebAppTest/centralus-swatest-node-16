module.exports = async function (context, req) {
  const date = "2025-02-27T07:11:52.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

