module.exports = async function (context, req) {
  const date = "2022-05-02T22:11:42.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

