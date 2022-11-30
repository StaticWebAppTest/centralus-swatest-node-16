module.exports = async function (context, req) {
  const date = "2022-11-30T23:10:27.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

