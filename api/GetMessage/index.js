module.exports = async function (context, req) {
  const date = "2022-07-12T23:11:04.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

