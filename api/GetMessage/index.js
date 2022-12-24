module.exports = async function (context, req) {
  const date = "2022-12-24T06:10:59.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

