module.exports = async function (context, req) {
  const date = "2022-02-23T20:13:22.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

