module.exports = async function (context, req) {
  const date = "2022-03-27T00:49:30.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

