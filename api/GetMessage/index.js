module.exports = async function (context, req) {
  const date = "2022-03-06T06:11:34.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

