module.exports = async function (context, req) {
  const date = "2022-11-28T23:10:33.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

