module.exports = async function (context, req) {
  const date = "2022-09-06T19:09:03.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

