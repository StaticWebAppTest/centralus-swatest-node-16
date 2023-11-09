module.exports = async function (context, req) {
  const date = "2023-11-09T11:07:23.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

