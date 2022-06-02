module.exports = async function (context, req) {
  const date = "2022-06-02T18:13:38.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

