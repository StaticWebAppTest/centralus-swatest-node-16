module.exports = async function (context, req) {
  const date = "2023-10-16T00:42:01.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

