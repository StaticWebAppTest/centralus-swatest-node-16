module.exports = async function (context, req) {
  const date = "2023-04-28T10:09:36.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

