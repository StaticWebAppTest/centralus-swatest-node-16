module.exports = async function (context, req) {
  const date = "2022-09-02T16:15:03.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

