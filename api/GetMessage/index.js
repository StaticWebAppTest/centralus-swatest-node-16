module.exports = async function (context, req) {
  const date = "2022-04-02T12:15:50.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

