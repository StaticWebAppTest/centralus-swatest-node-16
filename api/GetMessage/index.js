module.exports = async function (context, req) {
  const date = "2022-07-24T12:18:51.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

