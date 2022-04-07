module.exports = async function (context, req) {
  const date = "2022-04-07T22:10:22.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

