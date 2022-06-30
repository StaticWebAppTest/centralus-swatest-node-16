module.exports = async function (context, req) {
  const date = "2022-06-30T23:10:49.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

