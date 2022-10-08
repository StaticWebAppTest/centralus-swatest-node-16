module.exports = async function (context, req) {
  const date = "2022-10-08T20:13:28.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

