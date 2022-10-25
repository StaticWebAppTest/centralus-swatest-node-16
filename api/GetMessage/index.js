module.exports = async function (context, req) {
  const date = "2022-10-25T12:29:25.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

