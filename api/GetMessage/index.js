module.exports = async function (context, req) {
  const date = "2022-10-15T04:09:01.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

