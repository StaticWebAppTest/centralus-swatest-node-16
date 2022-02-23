module.exports = async function (context, req) {
  const date = "2022-02-23T14:09:09.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

