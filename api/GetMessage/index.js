module.exports = async function (context, req) {
  const date = "2022-08-20T08:14:23.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

