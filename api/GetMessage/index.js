module.exports = async function (context, req) {
  const date = "2022-07-01T14:09:07.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

