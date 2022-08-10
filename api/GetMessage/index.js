module.exports = async function (context, req) {
  const date = "2022-08-10T01:01:23.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

