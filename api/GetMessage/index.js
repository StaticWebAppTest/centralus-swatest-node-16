module.exports = async function (context, req) {
  const date = "2022-08-14T12:18:52.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

