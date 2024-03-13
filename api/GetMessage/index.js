module.exports = async function (context, req) {
  const date = "2024-03-13T05:09:36.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

