module.exports = async function (context, req) {
  const date = "2022-10-02T08:15:53.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

