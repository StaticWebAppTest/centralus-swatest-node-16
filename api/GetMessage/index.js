module.exports = async function (context, req) {
  const date = "2022-11-02T04:56:27.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

