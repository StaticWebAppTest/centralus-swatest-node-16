module.exports = async function (context, req) {
  const date = "2022-11-28T08:13:49.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

