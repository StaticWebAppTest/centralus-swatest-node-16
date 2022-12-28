module.exports = async function (context, req) {
  const date = "2022-12-28T19:07:06.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

