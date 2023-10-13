module.exports = async function (context, req) {
  const date = "2023-10-13T17:07:53.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

