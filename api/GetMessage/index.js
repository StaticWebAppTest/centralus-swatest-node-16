module.exports = async function (context, req) {
  const date = "2022-08-30T23:12:09.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

