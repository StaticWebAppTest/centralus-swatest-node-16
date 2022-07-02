module.exports = async function (context, req) {
  const date = "2022-07-02T11:08:51.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

