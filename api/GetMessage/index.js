module.exports = async function (context, req) {
  const date = "2022-04-14T17:15:54.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

