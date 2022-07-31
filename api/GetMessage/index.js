module.exports = async function (context, req) {
  const date = "2022-07-31T01:03:02.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

