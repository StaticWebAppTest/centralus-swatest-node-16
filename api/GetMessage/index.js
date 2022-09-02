module.exports = async function (context, req) {
  const date = "2022-09-02T11:10:40.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

