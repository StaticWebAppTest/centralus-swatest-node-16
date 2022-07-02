module.exports = async function (context, req) {
  const date = "2022-07-02T21:08:54.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

