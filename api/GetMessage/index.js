module.exports = async function (context, req) {
  const date = "2022-10-27T04:40:30.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

