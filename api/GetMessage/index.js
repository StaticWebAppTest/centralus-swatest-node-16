module.exports = async function (context, req) {
  const date = "2023-11-15T05:09:02.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

