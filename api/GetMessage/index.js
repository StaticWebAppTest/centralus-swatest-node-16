module.exports = async function (context, req) {
  const date = "2023-11-25T03:09:21.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

