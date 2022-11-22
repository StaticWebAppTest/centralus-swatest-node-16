module.exports = async function (context, req) {
  const date = "2022-11-22T22:10:27.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

