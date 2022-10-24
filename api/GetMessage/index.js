module.exports = async function (context, req) {
  const date = "2022-10-24T12:28:03.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

