module.exports = async function (context, req) {
  const date = "2022-05-24T06:14:29.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

