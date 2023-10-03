module.exports = async function (context, req) {
  const date = "2023-10-03T08:11:59.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

