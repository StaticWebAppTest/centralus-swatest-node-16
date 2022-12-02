module.exports = async function (context, req) {
  const date = "2022-12-02T15:08:50.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

