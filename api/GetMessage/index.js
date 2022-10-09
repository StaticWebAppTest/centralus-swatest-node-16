module.exports = async function (context, req) {
  const date = "2022-10-09T01:10:37.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

