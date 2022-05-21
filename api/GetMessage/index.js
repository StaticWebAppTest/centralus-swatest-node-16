module.exports = async function (context, req) {
  const date = "2022-05-21T02:16:00.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

