module.exports = async function (context, req) {
  const date = "2022-02-28T06:12:39.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

