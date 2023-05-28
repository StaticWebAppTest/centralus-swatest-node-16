module.exports = async function (context, req) {
  const date = "2023-05-28T03:09:27.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

