module.exports = async function (context, req) {
  const date = "2023-12-28T18:11:27.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

