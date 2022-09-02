module.exports = async function (context, req) {
  const date = "2022-09-02T12:23:19.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

