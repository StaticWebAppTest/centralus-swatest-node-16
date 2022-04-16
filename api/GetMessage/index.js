module.exports = async function (context, req) {
  const date = "2022-04-16T15:10:21.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

