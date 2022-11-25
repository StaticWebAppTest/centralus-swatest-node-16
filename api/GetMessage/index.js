module.exports = async function (context, req) {
  const date = "2022-11-25T14:09:11.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

