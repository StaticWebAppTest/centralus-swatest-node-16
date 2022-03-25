module.exports = async function (context, req) {
  const date = "2022-03-25T23:10:00.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

