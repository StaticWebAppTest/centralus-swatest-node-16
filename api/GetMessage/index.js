module.exports = async function (context, req) {
  const date = "2022-10-28T08:16:28.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

