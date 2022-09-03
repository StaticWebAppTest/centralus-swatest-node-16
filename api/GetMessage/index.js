module.exports = async function (context, req) {
  const date = "2022-09-03T16:14:00.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

