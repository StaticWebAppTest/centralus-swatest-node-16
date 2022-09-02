module.exports = async function (context, req) {
  const date = "2022-09-02T21:10:03.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

