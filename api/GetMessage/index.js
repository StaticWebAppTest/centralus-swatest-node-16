module.exports = async function (context, req) {
  const date = "2022-10-06T11:12:52.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

