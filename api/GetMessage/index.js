module.exports = async function (context, req) {
  const date = "2024-08-13T05:11:05.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

