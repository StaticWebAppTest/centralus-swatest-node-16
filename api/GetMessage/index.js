module.exports = async function (context, req) {
  const date = "2023-05-03T06:11:32.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

