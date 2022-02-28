module.exports = async function (context, req) {
  const date = "2022-02-28T10:11:54.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

