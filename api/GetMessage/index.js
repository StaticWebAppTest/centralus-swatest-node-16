module.exports = async function (context, req) {
  const date = "2022-07-16T08:12:52.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

