module.exports = async function (context, req) {
  const date = "2022-05-02T20:14:14.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

