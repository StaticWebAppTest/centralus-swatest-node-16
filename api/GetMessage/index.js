module.exports = async function (context, req) {
  const date = "2023-02-06T11:08:09.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

