module.exports = async function (context, req) {
  const date = "2022-09-24T01:13:09.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

