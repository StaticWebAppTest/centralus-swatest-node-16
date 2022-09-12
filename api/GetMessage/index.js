module.exports = async function (context, req) {
  const date = "2022-09-12T10:13:44.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

