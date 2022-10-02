module.exports = async function (context, req) {
  const date = "2022-10-02T11:10:31.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

