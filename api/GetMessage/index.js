module.exports = async function (context, req) {
  const date = "2022-11-11T17:14:43.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

