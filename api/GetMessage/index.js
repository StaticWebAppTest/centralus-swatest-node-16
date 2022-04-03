module.exports = async function (context, req) {
  const date = "2022-04-03T17:11:05.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

