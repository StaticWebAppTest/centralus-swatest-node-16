module.exports = async function (context, req) {
  const date = "2023-03-16T03:10:20.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

