module.exports = async function (context, req) {
  const date = "2022-10-19T14:30:05.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

