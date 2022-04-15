module.exports = async function (context, req) {
  const date = "2022-04-15T08:13:45.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

