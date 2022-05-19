module.exports = async function (context, req) {
  const date = "2022-05-19T19:10:05.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

