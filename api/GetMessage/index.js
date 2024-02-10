module.exports = async function (context, req) {
  const date = "2024-02-10T16:11:02.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

