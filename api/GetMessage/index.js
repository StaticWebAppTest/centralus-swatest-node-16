module.exports = async function (context, req) {
  const date = "2022-08-28T08:13:59.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

