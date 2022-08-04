module.exports = async function (context, req) {
  const date = "2022-08-04T11:09:22.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

