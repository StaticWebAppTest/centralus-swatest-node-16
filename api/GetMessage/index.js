module.exports = async function (context, req) {
  const date = "2022-12-02T18:11:57.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

