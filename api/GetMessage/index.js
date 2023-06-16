module.exports = async function (context, req) {
  const date = "2023-06-16T16:10:58.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

