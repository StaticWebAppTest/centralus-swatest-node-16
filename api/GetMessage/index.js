module.exports = async function (context, req) {
  const date = "2023-03-02T11:08:52.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

