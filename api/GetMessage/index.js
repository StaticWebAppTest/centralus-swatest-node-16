module.exports = async function (context, req) {
  const date = "2022-10-06T17:27:26.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

