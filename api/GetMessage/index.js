module.exports = async function (context, req) {
  const date = "2022-05-28T17:15:40.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

