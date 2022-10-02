module.exports = async function (context, req) {
  const date = "2022-10-02T19:12:36.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

