module.exports = async function (context, req) {
  const date = "2022-06-13T05:16:40.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

