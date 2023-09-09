module.exports = async function (context, req) {
  const date = "2023-09-09T06:10:20.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

