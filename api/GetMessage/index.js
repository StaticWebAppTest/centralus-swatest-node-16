module.exports = async function (context, req) {
  const date = "2022-07-14T17:22:32.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

