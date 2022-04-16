module.exports = async function (context, req) {
  const date = "2022-04-16T06:12:37.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

