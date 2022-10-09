module.exports = async function (context, req) {
  const date = "2022-10-09T23:14:00.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

