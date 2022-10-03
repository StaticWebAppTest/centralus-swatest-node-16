module.exports = async function (context, req) {
  const date = "2022-10-03T12:28:52.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

