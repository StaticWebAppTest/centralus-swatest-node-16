module.exports = async function (context, req) {
  const date = "2022-11-21T11:09:30.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

