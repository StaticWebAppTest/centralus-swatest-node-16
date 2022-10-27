module.exports = async function (context, req) {
  const date = "2022-10-27T19:11:26.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

