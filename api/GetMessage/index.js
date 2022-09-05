module.exports = async function (context, req) {
  const date = "2022-09-05T16:15:07.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

