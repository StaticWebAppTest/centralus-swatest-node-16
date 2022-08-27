module.exports = async function (context, req) {
  const date = "2022-08-27T21:10:05.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

