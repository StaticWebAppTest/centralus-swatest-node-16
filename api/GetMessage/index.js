module.exports = async function (context, req) {
  const date = "2022-02-26T01:52:50.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

