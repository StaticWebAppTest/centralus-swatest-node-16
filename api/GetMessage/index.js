module.exports = async function (context, req) {
  const date = "2022-10-11T19:16:00.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

