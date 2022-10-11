module.exports = async function (context, req) {
  const date = "2022-10-11T20:16:24.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

