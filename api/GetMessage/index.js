module.exports = async function (context, req) {
  const date = "2022-03-21T07:10:20.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

