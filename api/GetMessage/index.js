module.exports = async function (context, req) {
  const date = "2023-03-16T05:09:20.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

