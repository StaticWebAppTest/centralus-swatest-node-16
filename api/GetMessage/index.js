module.exports = async function (context, req) {
  const date = "2022-10-04T07:23:02.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

