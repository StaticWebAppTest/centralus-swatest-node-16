module.exports = async function (context, req) {
  const date = "2022-03-21T19:08:44.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

