module.exports = async function (context, req) {
  const date = "2022-12-26T17:08:07.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

