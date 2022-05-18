module.exports = async function (context, req) {
  const date = "2022-05-18T11:09:29.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

