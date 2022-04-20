module.exports = async function (context, req) {
  const date = "2022-04-20T11:09:13.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

