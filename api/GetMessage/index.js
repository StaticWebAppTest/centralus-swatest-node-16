module.exports = async function (context, req) {
  const date = "2022-05-20T19:09:07.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

