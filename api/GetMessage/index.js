module.exports = async function (context, req) {
  const date = "2023-03-16T07:09:31.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

