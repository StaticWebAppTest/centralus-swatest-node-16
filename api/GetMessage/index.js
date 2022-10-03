module.exports = async function (context, req) {
  const date = "2022-10-03T06:25:07.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

