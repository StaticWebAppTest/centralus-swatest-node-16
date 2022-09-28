module.exports = async function (context, req) {
  const date = "2022-09-28T09:19:51.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

