module.exports = async function (context, req) {
  const date = "2022-12-06T08:12:52.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

