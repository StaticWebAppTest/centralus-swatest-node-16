module.exports = async function (context, req) {
  const date = "2022-10-24T23:15:04.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

