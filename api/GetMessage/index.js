module.exports = async function (context, req) {
  const date = "2022-09-02T01:03:57.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

