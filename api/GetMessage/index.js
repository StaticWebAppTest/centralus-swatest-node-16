module.exports = async function (context, req) {
  const date = "2022-04-28T19:09:01.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

