module.exports = async function (context, req) {
  const date = "2023-08-11T06:11:06.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

