module.exports = async function (context, req) {
  const date = "2022-10-27T12:27:36.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

