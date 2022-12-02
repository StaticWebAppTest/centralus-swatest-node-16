module.exports = async function (context, req) {
  const date = "2022-12-02T22:09:17.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

