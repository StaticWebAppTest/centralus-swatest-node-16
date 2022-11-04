module.exports = async function (context, req) {
  const date = "2022-11-04T06:14:54.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

