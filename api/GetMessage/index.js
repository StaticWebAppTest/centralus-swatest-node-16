module.exports = async function (context, req) {
  const date = "2022-11-11T23:11:51.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

