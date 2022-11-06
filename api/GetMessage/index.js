module.exports = async function (context, req) {
  const date = "2022-11-06T13:23:29.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

