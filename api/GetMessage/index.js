module.exports = async function (context, req) {
  const date = "2022-09-12T06:10:33.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

