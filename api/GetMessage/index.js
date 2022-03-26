module.exports = async function (context, req) {
  const date = "2022-03-26T11:08:37.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

