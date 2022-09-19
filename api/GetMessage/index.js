module.exports = async function (context, req) {
  const date = "2022-09-19T12:27:32.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

