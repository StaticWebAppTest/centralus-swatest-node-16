module.exports = async function (context, req) {
  const date = "2022-04-02T11:08:30.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

