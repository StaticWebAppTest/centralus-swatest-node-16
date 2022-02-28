module.exports = async function (context, req) {
  const date = "2022-02-28T08:17:21.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

