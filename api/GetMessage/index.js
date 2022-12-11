module.exports = async function (context, req) {
  const date = "2022-12-11T19:07:25.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

