module.exports = async function (context, req) {
  const date = "2022-03-11T23:09:49.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

