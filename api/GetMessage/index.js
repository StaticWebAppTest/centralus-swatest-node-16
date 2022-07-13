module.exports = async function (context, req) {
  const date = "2022-07-13T09:10:57.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

