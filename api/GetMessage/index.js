module.exports = async function (context, req) {
  const date = "2023-11-15T16:12:02.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

