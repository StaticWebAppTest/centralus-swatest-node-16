module.exports = async function (context, req) {
  const date = "2022-04-15T19:09:23.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

