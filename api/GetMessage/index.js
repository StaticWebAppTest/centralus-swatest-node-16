module.exports = async function (context, req) {
  const date = "2022-10-02T12:23:42.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

