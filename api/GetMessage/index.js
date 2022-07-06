module.exports = async function (context, req) {
  const date = "2022-07-06T17:23:00.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

