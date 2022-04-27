module.exports = async function (context, req) {
  const date = "2022-04-27T15:12:04.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

