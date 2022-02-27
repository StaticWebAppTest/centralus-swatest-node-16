module.exports = async function (context, req) {
  const date = "2022-02-27T20:10:21.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

