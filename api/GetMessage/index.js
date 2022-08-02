module.exports = async function (context, req) {
  const date = "2022-08-02T01:06:06.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

