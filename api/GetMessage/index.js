module.exports = async function (context, req) {
  const date = "2022-10-30T22:11:31.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

