module.exports = async function (context, req) {
  const date = "2022-09-17T15:12:20.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

