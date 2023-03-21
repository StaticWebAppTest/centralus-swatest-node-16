module.exports = async function (context, req) {
  const date = "2023-03-21T05:09:02.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

