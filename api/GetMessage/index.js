module.exports = async function (context, req) {
  const date = "2023-10-16T05:09:05.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

