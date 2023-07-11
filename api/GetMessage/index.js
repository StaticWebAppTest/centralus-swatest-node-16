module.exports = async function (context, req) {
  const date = "2023-07-11T04:12:08.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

