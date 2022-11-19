module.exports = async function (context, req) {
  const date = "2022-11-19T19:08:20.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

