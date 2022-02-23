module.exports = async function (context, req) {
  const date = "2022-02-23T12:18:10.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

