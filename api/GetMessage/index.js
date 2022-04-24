module.exports = async function (context, req) {
  const date = "2022-04-24T07:10:20.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

