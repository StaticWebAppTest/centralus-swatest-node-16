module.exports = async function (context, req) {
  const date = "2022-11-04T09:10:54.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

