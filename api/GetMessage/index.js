module.exports = async function (context, req) {
  const date = "2022-04-11T11:09:16.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

