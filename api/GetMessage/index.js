module.exports = async function (context, req) {
  const date = "2022-03-02T02:07:26.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

