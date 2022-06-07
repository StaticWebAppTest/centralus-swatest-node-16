module.exports = async function (context, req) {
  const date = "2022-06-07T15:10:49.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

