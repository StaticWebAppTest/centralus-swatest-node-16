module.exports = async function (context, req) {
  const date = "2022-11-21T04:19:03.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

