module.exports = async function (context, req) {
  const date = "2024-07-02T20:11:10.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

