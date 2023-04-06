module.exports = async function (context, req) {
  const date = "2023-04-06T06:11:38.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

