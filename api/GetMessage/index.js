module.exports = async function (context, req) {
  const date = "2022-03-11T14:09:15.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

