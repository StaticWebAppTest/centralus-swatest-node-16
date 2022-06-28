module.exports = async function (context, req) {
  const date = "2022-06-28T19:08:15.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

