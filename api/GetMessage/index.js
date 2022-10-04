module.exports = async function (context, req) {
  const date = "2022-10-04T06:24:43.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

