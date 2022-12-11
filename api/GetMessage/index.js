module.exports = async function (context, req) {
  const date = "2022-12-11T09:09:00.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

