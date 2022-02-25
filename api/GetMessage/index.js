module.exports = async function (context, req) {
  const date = "2022-02-25T12:15:58.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

