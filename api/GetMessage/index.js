module.exports = async function (context, req) {
  const date = "2022-07-17T14:09:20.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

