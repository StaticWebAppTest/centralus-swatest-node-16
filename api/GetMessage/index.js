module.exports = async function (context, req) {
  const date = "2022-09-02T23:11:22.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

