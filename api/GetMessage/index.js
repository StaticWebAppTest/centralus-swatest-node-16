module.exports = async function (context, req) {
  const date = "2022-09-30T23:13:38.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

