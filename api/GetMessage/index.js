module.exports = async function (context, req) {
  const date = "2022-10-10T06:47:05.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

