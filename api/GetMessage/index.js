module.exports = async function (context, req) {
  const date = "2022-12-04T04:11:31.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

