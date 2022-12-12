module.exports = async function (context, req) {
  const date = "2022-12-12T00:53:11.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

