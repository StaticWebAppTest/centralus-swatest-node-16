module.exports = async function (context, req) {
  const date = "2022-12-27T07:08:35.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

