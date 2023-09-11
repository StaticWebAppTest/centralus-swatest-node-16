module.exports = async function (context, req) {
  const date = "2023-09-11T06:11:43.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

