module.exports = async function (context, req) {
  const date = "2022-07-17T15:10:02.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

