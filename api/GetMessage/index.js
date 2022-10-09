module.exports = async function (context, req) {
  const date = "2022-10-09T10:13:36.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

