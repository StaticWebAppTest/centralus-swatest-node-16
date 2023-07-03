module.exports = async function (context, req) {
  const date = "2023-07-03T03:20:26.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

