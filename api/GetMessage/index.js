module.exports = async function (context, req) {
  const date = "2023-07-28T06:11:31.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

