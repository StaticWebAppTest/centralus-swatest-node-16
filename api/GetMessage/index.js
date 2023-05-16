module.exports = async function (context, req) {
  const date = "2023-05-16T16:11:18.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

