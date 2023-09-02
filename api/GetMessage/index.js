module.exports = async function (context, req) {
  const date = "2023-09-02T01:38:10.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

