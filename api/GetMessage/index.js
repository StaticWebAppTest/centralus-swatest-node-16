module.exports = async function (context, req) {
  const date = "2022-03-11T17:13:04.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

