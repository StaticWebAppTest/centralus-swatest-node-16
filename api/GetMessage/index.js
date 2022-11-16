module.exports = async function (context, req) {
  const date = "2022-11-16T15:11:21.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

