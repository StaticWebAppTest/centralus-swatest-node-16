module.exports = async function (context, req) {
  const date = "2023-05-02T07:08:27.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

