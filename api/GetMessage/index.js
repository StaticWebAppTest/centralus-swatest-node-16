module.exports = async function (context, req) {
  const date = "2023-06-30T16:12:21.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

