module.exports = async function (context, req) {
  const date = "2022-06-09T04:22:23.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

