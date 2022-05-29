module.exports = async function (context, req) {
  const date = "2022-05-29T19:09:20.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

