module.exports = async function (context, req) {
  const date = "2022-11-12T08:14:21.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

