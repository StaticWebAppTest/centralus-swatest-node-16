module.exports = async function (context, req) {
  const date = "2022-07-02T23:09:33.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

