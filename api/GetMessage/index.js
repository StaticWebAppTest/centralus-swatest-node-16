module.exports = async function (context, req) {
  const date = "2022-04-03T21:09:48.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

