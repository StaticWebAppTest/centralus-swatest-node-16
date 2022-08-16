module.exports = async function (context, req) {
  const date = "2022-08-16T23:09:40.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

