module.exports = async function (context, req) {
  const date = "2022-12-27T14:08:38.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

