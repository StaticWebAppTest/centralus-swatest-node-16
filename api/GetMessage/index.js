module.exports = async function (context, req) {
  const date = "2022-08-02T23:10:44.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

