module.exports = async function (context, req) {
  const date = "2024-02-12T05:09:48.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

