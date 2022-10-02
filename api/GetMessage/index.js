module.exports = async function (context, req) {
  const date = "2022-10-02T14:13:05.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

