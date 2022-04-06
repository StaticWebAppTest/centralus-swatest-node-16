module.exports = async function (context, req) {
  const date = "2022-04-06T19:07:11.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

