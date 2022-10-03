module.exports = async function (context, req) {
  const date = "2022-10-03T09:21:11.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

