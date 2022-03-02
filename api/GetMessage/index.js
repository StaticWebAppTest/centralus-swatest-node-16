module.exports = async function (context, req) {
  const date = "2022-03-02T11:08:31.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

