module.exports = async function (context, req) {
  const date = "2023-10-30T12:16:54.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

