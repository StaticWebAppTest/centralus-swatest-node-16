module.exports = async function (context, req) {
  const date = "2023-08-04T11:07:14.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

