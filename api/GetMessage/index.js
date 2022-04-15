module.exports = async function (context, req) {
  const date = "2022-04-15T11:09:05.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

