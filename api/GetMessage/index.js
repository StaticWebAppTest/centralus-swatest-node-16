module.exports = async function (context, req) {
  const date = "2022-05-09T06:14:36.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

