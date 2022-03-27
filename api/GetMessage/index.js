module.exports = async function (context, req) {
  const date = "2022-03-27T20:11:16.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

