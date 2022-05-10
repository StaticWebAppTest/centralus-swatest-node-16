module.exports = async function (context, req) {
  const date = "2022-05-10T23:11:29.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

