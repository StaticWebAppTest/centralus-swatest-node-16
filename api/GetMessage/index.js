module.exports = async function (context, req) {
  const date = "2022-05-17T05:16:23.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

