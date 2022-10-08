module.exports = async function (context, req) {
  const date = "2022-10-08T06:17:44.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

