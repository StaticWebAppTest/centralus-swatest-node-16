module.exports = async function (context, req) {
  const date = "2022-07-31T23:11:09.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

