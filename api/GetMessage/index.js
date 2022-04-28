module.exports = async function (context, req) {
  const date = "2022-04-28T22:10:51.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

